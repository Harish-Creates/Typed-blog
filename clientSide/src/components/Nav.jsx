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
      <Navbar shouldHideOnScroll height={"5rem"} maxWidth="full" className="sm:px-0 md:px-8 lg:px-16">
        <NavbarContent justify="start">
          <p className="text-xl">Typed.</p>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-16 px-3" justify="center">
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
        <NavbarContent justify="end" className="flex gap-6">
          <NavbarItem>
            <ThemeToggle />
          </NavbarItem>
          <NavbarItem className="hidden sm:flex">
            <Button as={Link} className="font-bold" variant="ghost">
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
            <Link size="lg" color="foreground">Discover</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link size="lg" color="foreground">Following</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link size="lg" color="danger">Sign Up</Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Nav;
