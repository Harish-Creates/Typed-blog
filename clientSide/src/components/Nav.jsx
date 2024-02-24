import {
  Button,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import ThemeToggle from "../theme/ThemeToggle";

const Nav = () => {
  return (
    <>
      <Navbar height={"5rem"} maxWidth="full" className="px-14">
        <NavbarContent justify="start">
          <p className="text-xl">Typed.</p>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-16" justify="center">
          <NavbarItem>
            <Link size="lg" color="foreground">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link size="lg" color="foreground">
              Discover
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link size="lg" color="foreground">
              Following
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <ThemeToggle />
            <Button
              as={Link}
              variant="ghost"
              color="primary"
              className="font-bold"
            >
              Sign Up
            </Button>
          </NavbarItem>
          <NavbarMenuToggle className="sm:hidden" />
        </NavbarContent>
        <NavbarMenu className="items-end no-scrollbar gap-6 pt-8 pr-20">
          <NavbarMenuItem>
            <Link size="lg" color="foreground">
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground">Discover</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground">Following</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="danger">Sign Up</Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Nav;
