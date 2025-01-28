import Layout from "@/components/layout"
import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const courses = [
  { id: 1, title: "Introduction à l'Ethical Hacking", level: "Débutant", duration: "4 semaines", enrolled: 1500 },
  { id: 2, title: "Sécurité des Applications Web", level: "Intermédiaire", duration: "6 semaines", enrolled: 1200 },
  { id: 3, title: "Cryptographie Avancée", level: "Avancé", duration: "8 semaines", enrolled: 800 },
  { id: 4, title: "Forensics Numériques", level: "Intermédiaire", duration: "5 semaines", enrolled: 1000 },
  { id: 5, title: "Exploitation de Binaires", level: "Avancé", duration: "10 semaines", enrolled: 600 },
]

export default function LearnPage() {
  return (
    <Layout>
      <div className="space-y-6 max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Apprentissage</h1>
          <Link href="/learn/add-course">
            <Button>Ajouter un cours</Button>
          </Link>
        </div>
        <Card className="bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Cours disponibles</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="beginner">Débutant</TabsTrigger>
                <TabsTrigger value="intermediate">Intermédiaire</TabsTrigger>
                <TabsTrigger value="advanced">Avancé</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </TabsContent>
              {/* Add similar TabsContent for other levels */}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

