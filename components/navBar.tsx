import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
import { Link } from "@heroui/link";

import { ThemeSwitch } from "@/components/theme-switch";

export function Nav() {
    return (
        <Navbar>
            <NavbarBrand>
                <Link href="/">Coin Catalog</Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href="/">Home</Link>
                </NavbarItem>
                
                <NavbarItem>
                    <Link href="/coins">Coins</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <ThemeSwitch />
            </NavbarContent>
        </Navbar>
    );
};