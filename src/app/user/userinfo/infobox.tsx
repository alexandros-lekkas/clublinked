import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComboboxDemo } from "./combobox"

export function Infobox() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign up for your account</CardTitle>
        <CardDescription>
          Fill out your student details to start looking for clubs
        </CardDescription>
        <CardAction>
          <Button variant="link">Login</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="firstname">First Name</Label>
              <Input
                id="firstname"
                type="text"
                placeholder="John"
                required
              />
            </div>
            </div>
            <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                type="text"
                placeholder="Doe"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="major">Major</Label>
              <Input
                id="major"
                type="text"
                placeholder="e.g. Computer Science"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label>Year</Label>
              <ComboboxDemo />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </CardFooter>
    </Card>
  )
}
