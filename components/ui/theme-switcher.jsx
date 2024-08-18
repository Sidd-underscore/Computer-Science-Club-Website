"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeSwitcher({className}) {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button variant="secondary" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8} className="lg:-mr-0.5" align="end">
        <DropdownMenuItem className="" onClick={() => setTheme("light")}>
          <code className="mr-2 tracking-[-0.1em]">:(</code> {" "} light
        </DropdownMenuItem>
        <DropdownMenuItem className="" onClick={() => setTheme("dark")}>
          <code className="mr-2 tracking-[-0.1em]">:)</code> {" "} dark 
        </DropdownMenuItem>
        <DropdownMenuItem className="" onClick={() => setTheme("system")}>
          <code className="mr-2 tracking-[-0.1em]">:/</code> {" "} system
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
