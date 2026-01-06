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
        <CardTitle className="mb-2">Make your Club an official member of Clublinked!</CardTitle>
        <CardDescription>
          Fill out your club details to get started
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="clubname">Club Name</Label>
              <Input
                id="clubname"
                type="text"
                placeholder="Club Name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="members">Current amount of registered members</Label>
              <Input
                id="members"
                type="text"
                placeholder="e.g. 10"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label>Club Type</Label>
              <ComboboxDemo />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Create
        </Button>
      </CardFooter>
    </Card>
  )
}
