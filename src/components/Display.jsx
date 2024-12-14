import React from 'react'
import { useState } from 'react';
import data from '../states.json'
import StateTemple from './StateTemple'
import { useNavigate } from 'react-router-dom';
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import propp from "../assets/prop.webp"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function Display() {

  useGSAP(()=>{
    gsap.from('#hd',
      {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: "power3.out",
      }
    )
  })

  const navigate = useNavigate();

  function SearchResult(){
    navigate(`/search`, { state: [value, value2] } )
  };

  //Search logic
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const [open2, setOpen2] = React.useState(false)
  const [value2, setValue2] = React.useState("")

  return (
    <>
      <div className='bg-sky-900 relative' >
        <div className='flex flex-col items-center justify-center'>
          <h1 id="hd" className='text- font-rowdies text-white text-center text-3xl md:text-7xl m-10 sm:mt-28 sm:mb-10'>Get Best Spritual Trip Guide</h1>
          <div className='h-[30vh] w-[80vw] bg-sky-600 m-20 rounded-lg sm:rounded-full border-4 flex flex-col items-center justify-center'>

            {/* Search Logic Here  */}
          <div className='w-5/6 flex items-center justify-around'>
            <div>
             <h1 className='font-bold ml-5 text-white text-2xl'>From :</h1>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[100px] h-10 m-3 bg-gray-900 text-white justify-between rounded-lg hover:bg-sky-800 hover:text-white sm:w-[200px] sm:h-16"
                >
                  {value
                    ? value
                    : "Select State..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-100" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search State..." />
                  <CommandList>
                    <CommandEmpty>No State found.</CommandEmpty>
                    <CommandGroup>
                      {Object.keys(data).map((state, index) => (
                        <CommandItem
                          key={index}
                          value={state}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === state ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {state}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>


          <div>
            <h1 className='font-bold ml-5 text-white text-2xl'>To :</h1>
            <Popover open={open2} onOpenChange={setOpen2}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open2}
                  className="w-[100px] h-10 sm:w-[200px] sm:h-16 m-3 bg-gray-900 text-white justify-between rounded-lg hover:bg-sky-800 hover:text-white"
                >
                  {value2
                    ? value2
                    : "Select State..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-100" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search State..." />
                  <CommandList>
                    <CommandEmpty>No State found.</CommandEmpty>
                    <CommandGroup>
                      {Object.keys(data).map((state, index) => (
                        <CommandItem
                          key={index}
                          value={state}
                          onSelect={(currentValue) => {
                            setValue2(currentValue === value2 ? "" : currentValue)
                            setOpen2(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value2 === state ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {state}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            </div>
            </div>
             <div>
                      <button 
                              className='bg-sky-900 text-white h-8 w-24 text-lg rounded-full hover:bg-gray-800'
                              onClick={()=>SearchResult()}
                              >Start</button>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Display;