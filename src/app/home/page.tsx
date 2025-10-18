import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PerformanceChart from "@/components/ui/perfomanceChart";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Home,
  BookMarked,
  FileQuestion,
  BarChart3,
  UserCircle,
  SquarePercent,
  FlaskConical,
  Atom,
  Castle,
} from "lucide-react";
import Link from "next/link";

const lessons = [
  {
    name: "Matemática",
    href: "/materias/matematica",
    description: "Estude os conceitos fundamentais de matemática.",
    Icon: <SquarePercent />,
  },
  {
    name: "Física",
    href: "/materias/fisica",
    description: "Explore as leis da física e suas aplicações.",
    Icon: <Atom />,
  },
  {
    name: "Química",
    href: "/materias/quimica",
    description: "Aprenda sobre reações químicas e a tabela periódica.",
    Icon: <FlaskConical />,
  },
  {
    name: "História",
    href: "/materias/historia",
    description: "Descubra os eventos que moldaram o mundo.",
    Icon: <Castle />,
  },
];

export default function HomePage() {
  return (
    <SidebarProvider>
      <div className="w-full h-screen flex">
        <Sidebar>
          <SidebarHeader>
            <h2 className="text-xl font-semibold">EduBot</h2>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <Link
                href="/home"
                className="flex items-center gap-3 p-2 rounded-md hover:bg-muted"
              >
                <Home size={20} />
                <span>Início</span>
              </Link>
              <Link
                href="/materias"
                className="flex items-center gap-3 p-2 rounded-md hover:bg-muted"
              >
                <BookMarked size={20} />
                <span>Matérias</span>
              </Link>
              <Link
                href="/questoes"
                className="flex items-center gap-3 p-2 rounded-md hover:bg-muted"
              >
                <FileQuestion size={20} />
                <span>Questões</span>
              </Link>
              <Link
                href="/graficos"
                className="flex items-center gap-3 p-2 rounded-md hover:bg-muted"
              >
                <BarChart3 size={20} />
                <span>Gráficos</span>
              </Link>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            {/* <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted cursor-pointer">
              <UserCircle size={20} />
              <span>Perfil</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted cursor-pointer text-red-500">
              <LogOut size={20} />
              <span>Sair</span>
            </div> */}
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 p-6 space-y-6">
          <div className="flex justify-between items-center">
            <SidebarTrigger />

            <div>
              <UserCircle />
            </div>
          </div>

          <div>
            <div>
              <h1 className="text-3xl font-bold">Olá Usuário</h1>
              <p className="text-muted-foreground">
                O que você gostaria de aprender hoje?
              </p>
            </div>
            <Separator className="my-4" />

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {lessons.map((lesson) => (
                <Card className="w-full" key={lesson.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {lesson.Icon}
                      {lesson.name}
                    </CardTitle>
                    <CardDescription>{lesson.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex-col gap-2"></CardFooter>
                </Card>
              ))}
            </div>
            <Separator className="my-4" />

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Questão do dia
                  </CardTitle>
                  <CardDescription>Qual a formula da força</CardDescription>
                </CardHeader>
                <CardAction className="flex flex-col">
                  <Button variant="link">A. F = m x a</Button>
                  <Button variant="link">B. F = m / a</Button>
                  <Button variant="link">C. F = m + a</Button>
                  <Button variant="link">D. F = m - a</Button>
                </CardAction>
                <CardFooter></CardFooter>
              </Card>
              <PerformanceChart />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
