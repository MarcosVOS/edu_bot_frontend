import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Login() {
  async function loginAction(formData: FormData) {
    "use server";

    console.log("Form submitted. Redirecting to home...");
    redirect("/home");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center text-center">
          <CircleUserRound className="mx-auto mb-2 h-12 w-12" />
          <CardTitle>Entrar com sua conta</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={loginAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Senha "
                  required
                />
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Lembrar de mim</Label>
              </div>
              <Link
                href={"/auth/forgot-password"}
                className="ml-auto text-[#4865B0] inline-block text-sm underline-offset-4 hover:underline"
              >
                Esqueceu sua senha ?
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#517AE4] text-white hover:bg-blue-700 mt-6"
            >
              Entrar
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Separator className="my-2" />
          Não tem uma conta ?
          <Button variant="link" className="text-[#4865B0]">
            <Link href={"/auth/signup"}>Registre-se</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
