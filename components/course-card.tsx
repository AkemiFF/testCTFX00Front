import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"

interface CourseCardProps {
  title: string
  level: string
  duration: string
  enrolled: number
}

export function CourseCard({ title, level, duration, enrolled }: CourseCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <Badge variant="outline" className="w-fit">
          {level}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Clock size={16} />
          <span>{duration}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
          <Users size={16} />
          <span>{enrolled} inscrits</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">S'inscrire</Button>
      </CardFooter>
    </Card>
  )
}

