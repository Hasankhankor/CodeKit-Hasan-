import { Github, MoveDown, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export const Hero = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div>
          <Badge variant="outline" className="glow-blink">We&apos;re live!</Badge>
        </div>

        <div className="flex gap-6 flex-col">
          <h1 className="text-4xl md:text-5xl max-w-2xl tracking-tighter text-center font-regular font-bold">
            <span className="block md:inline">Ready-made </span>
            <span
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Components to Copy/Paste
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            Easily integrate high-quality, reusable code into your projects. Hasan&apos;s CodeKit provides beautifully designed components that work seamlessly in both dark and light modes.
          </p>
        </div>

        <div className="flex flex-row gap-3">
          <Button size="lg" className="gap-2 gradient-button-outline" variant="outline">
            See all Components<MoveDown className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </div>
  </div>
);
