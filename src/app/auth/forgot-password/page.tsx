import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center text-center">
          <CircleUserRound className="mx-auto mb-2 h-12 w-12" />
          <CardTitle>Redefinir senha</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full bg-[#517AE4] text-white hover:bg-blue-700"
          >
            Redefinir senha
          </Button>
          <Separator className="my-4" />
          Já tem uma conta ?
          <Button variant="link" className="text-[#4865B0]">
            <Link href={"/auth/login"}>Faça login</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
