import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
} from "@nextui-org/react";
import ThemeToggle from "../theme/ThemeToggle";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavMenus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Discover",
    path: "/discover",
  },
  {
    name: "Following",
    path: "/following",
  },
];

const Nav = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
        height={"5rem"}
        maxWidth="full"
        className="sm:px-0 md:px-8 lg:px-16"
      >
        <NavbarContent justify="start">
          <p className="text-xl">Typed.</p>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-16 px-3" justify="center">
          {NavMenus.map((menu) => (
            <NavbarItem key={menu.name}>
              <NavLink
                to={menu.path}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "font-semibold text-md hidden sm:block"
                    : isPending
                    ? "text-md  hover:text-default-500 transition-all duration-800 sm:block hidden text-default-400"
                    : "text-md hover:text-default-400 transition-all duration-800 sm:block hidden text-default-600"
                }
              >
                {menu.name}
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end" className="flex gap-6">
          <NavbarItem>
            <ThemeToggle />
          </NavbarItem>
          <NavbarItem className="hidden sm:flex">
            <button
              onClick={onOpen}
              className={
                isOpen
                  ? "text-md border-2 border-default-700 px-5 py-2 rounded-lg bg-default-700 text-background transition-background"
                  : "text-md border-2 border-default-700 text-default-700 px-5 py-2 rounded-lg hover:bg-default-700 hover:text-background transition-background"
              }
            >
              Sign Up
            </button>
          </NavbarItem>
          <NavbarMenuToggle className="sm:hidden" />
        </NavbarContent>
        <NavbarMenu className="items-end no-scrollbar gap-6 pt-8 pr-20">
          {NavMenus.map((menu) => (
            <NavbarMenuItem key={menu.name}>
              <NavLink
                to={menu.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "font-semibold text-md sm:hidden"
                    : isPending
                    ? "text-md  hover:text-default-400 transition-all duration-800 sm:hidden text-default-500"
                    : "text-md hover:text-default-400 transition-all duration-800 sm:hidden  text-default-500"
                }
              >
                {menu.name}
              </NavLink>
            </NavbarMenuItem>
          ))}

          <NavbarMenuItem>
            <button
              onClick={onOpen}
              className={
                isOpen
                  ? "text-md border-2 border-default-700 px-5 py-2 rounded-lg bg-default-700 text-background transition-background"
                  : "text-md border-2 border-default-700 text-default-700 px-5 py-2 rounded-lg hover:bg-default-700 hover:text-background transition-background"
              }
            >
              Sign Up
            </button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

      <Modal
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement={"top"}
      >
        <ModalContent>
          {(onClose) => {
            const handleMobileClose = () => {
              setIsMenuOpen(false);
              onClose();
            };
            return (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Log In
                </ModalHeader>
                <ModalBody>
                  <Input
                    autoFocus
                    label="username"
                    placeholder="Enter your username"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={handleMobileClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            );
          }}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Nav;
