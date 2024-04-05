import {
  ArrowUpRight,
  CircleUser,
  DollarSign,
  Menu,
  Home,
  Search,
  CheckCheck,
  FolderOpen,
  Bell,
  MessageCircleMore,
  Mail,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { useSessionContext } from "supertokens-auth-react/recipe/session";

export default function Dashboard() {
  const sessionContext = useSessionContext();

  if (sessionContext.loading === true) {
    return null;
  }
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Home className="h-6 w-6" />
            <span className="sr-only">Datablevn</span>
          </Link>
          <a
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Analytics
          </a>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Home className="h-6 w-6" />
                <span className="sr-only">Datablevn</span>
              </Link>
              <a href="#" className="hover:text-foreground">
                Dashboard
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Find projects..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <MessageCircleMore className="h-5 w-5" />
                <span className="sr-only">Toggle messages</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Messages</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User avatar"
                    />
                    <AvatarFallback className="bg-primary-foreground">
                      <CircleUser className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">John Doe</span>
                  <span className="text-sm text-gray-500">
                    Hello, how are you?
                  </span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User avatar"
                    />
                    <AvatarFallback className="bg-primary-foreground">
                      <CircleUser className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">Jane Doe</span>
                  <span className="text-sm text-gray-500">
                    Meeting at 10 AM
                  </span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User avatar"
                    />
                    <AvatarFallback className="bg-primary-foreground">
                      <CircleUser className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">Steve Smith</span>
                  <span className="text-sm text-gray-500">Lunch tomorrow?</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User avatar"
                    />
                    <AvatarFallback className="bg-primary-foreground">
                      <CircleUser className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">New message</span>
                  <span className="text-sm text-gray-500">from John Doe</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User avatar"
                    />
                    <AvatarFallback className="bg-primary-foreground">
                      <CircleUser className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">Update available</span>
                  <span className="text-sm text-gray-500">for App XYZ</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User avatar"
                    />
                    <AvatarFallback className="bg-primary-foreground">
                      <CircleUser className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">Payment received</span>
                  <span className="text-sm text-gray-500">
                    $100 from Jane Doe
                  </span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User avatar"
                  />
                  <AvatarFallback className="bg-primary-foreground">
                    <CircleUser className="h-6 w-6" />
                  </AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Completed Projects
              </CardTitle>
              <CheckCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                +200% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Projects
              </CardTitle>
              <FolderOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Invitation
              </CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">9</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid">
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Projects</CardTitle>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link to="/projects">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-left">Customer</TableHead>
                    <TableHead className="md:table-cell hidden text-center">
                      Project Type
                    </TableHead>
                    <TableHead className="md:table-cell hidden text-center">
                      Status
                    </TableHead>
                    <TableHead className="md:table-cell hidden text-center">
                      Due date
                    </TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-left">
                      <div className="font-medium">Liam Johnson</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        liam@example.com
                      </div>
                    </TableCell>
                    <TableCell className="md:table-cell hidden text-center">
                      Image Annotation
                    </TableCell>
                    <TableCell className="md:table-cell hidden text-center">
                      <Badge className="text-xs" variant="outline">
                        Submitted
                      </Badge>
                    </TableCell>
                    <TableCell className="md:table-cell hidden text-center">
                      2024-06-23
                    </TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-left">
                      <div className="font-medium">Joe Smith</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        joesmith@example.com
                      </div>
                    </TableCell>
                    <TableCell className="md:table-cell hidden text-center">
                      Text Annotation
                    </TableCell>
                    <TableCell className="md:table-cell hidden text-center">
                      <Badge className="text-xs" variant="outline">
                        On Going
                      </Badge>
                    </TableCell>
                    <TableCell className="md:table-cell hidden text-center">
                      2024-06-23
                    </TableCell>
                    <TableCell className="text-right">$500.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
