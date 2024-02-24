"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

import { toPng } from "html-to-image";

import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  CgColorBucket,
  CgFontHeight,
  CgFontSpacing,
  CgFormatColor,
} from "react-icons/cg";
import {
  RxAlignBottom,
  RxAlignCenterHorizontally,
  RxAlignCenterVertically,
  RxAlignLeft,
  RxAlignRight,
  RxAlignTop,
  RxCornerTopLeft,
  RxFontBold,
  RxFontSize,
  RxHeight,
  RxText,
  RxTextAlignCenter,
  RxTextAlignLeft,
  RxTextAlignRight,
  RxWidth,
} from "react-icons/rx";

const formSchema = z.object({
  alignItems: z.string(),
  justifyContent: z.string(),
  width: z.coerce.number(),
  height: z.preprocess((v) => Number(v), z.number()),
  text: z.string(),
  textAlign: z.string(),
  fontWeight: z.preprocess((v) => Number(v), z.number()),
  fontSize: z.preprocess((v) => Number(v), z.number()),
  lineHeight: z.preprocess((v) => Number(v), z.number()),
  letterSpacing: z.preprocess((v) => Number(v), z.number()),
  color: z.string(),
  backgroundColor: z.string(),
  borderRadius: z.preprocess((v) => Number(v), z.number()),
});

export default function Editor() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      alignItems: "center",
      justifyContent: "center",
      width: 128,
      height: 128,
      text: "Awesome😎",
      textAlign: "center",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1,
      letterSpacing: 0,
      color: "#ffffff",
      backgroundColor: "#000000",
      borderRadius: 8,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const node = document.getElementById("sticker");
      if (!node) return;

      const dataUrl = await toPng(node);
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "sticker.png";
      link.click();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <main className="container h-full py-6">
        <div className="grid grid-cols-2 gap-x-4">
          {/* Left Column*/}
          <div className="rounded-md border bg-muted flex justify-center items-center">
            <div
              id="sticker"
              className="absolute"
              style={{
                display: "flex",
                alignItems: form.watch("alignItems"),
                justifyContent: form.watch("justifyContent"),
                width: `${form.watch("width") || 0}px`,
                height: `${form.watch("height") || 0}px`,
                backgroundColor: form.watch("backgroundColor"),
                borderRadius: `${form.watch("borderRadius") || 0}px`,
              }}
            >
              <span
                className="whitespace-break-spaces min-w-fit"
                style={{
                  textAlign: form.watch("textAlign") as
                    | "start"
                    | "center"
                    | "end",
                  fontWeight: form.watch("fontWeight"),
                  fontSize: `${form.watch("fontSize") || 0}px`,
                  color: form.watch("color"),
                  lineHeight: form.watch("lineHeight"),
                  letterSpacing: `${form.watch("letterSpacing") || 0}px`,
                }}
              >
                {form.watch("text")}
              </span>
            </div>
          </div>

          <div>
            {/* Right Column*/}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="flex gap-4">
                  {/* justifyContent */}
                  <FormField
                    control={form.control}
                    name="justifyContent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex gap-2">
                          <RxAlignCenterHorizontally />
                          Align Horizontally
                        </FormLabel>
                        <FormControl>
                          <Tabs
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <TabsList>
                              <TabsTrigger value="start">
                                <RxAlignLeft />
                              </TabsTrigger>
                              <TabsTrigger value="center">
                                <RxAlignCenterHorizontally />
                              </TabsTrigger>
                              <TabsTrigger value="end">
                                <RxAlignRight />
                              </TabsTrigger>
                            </TabsList>
                          </Tabs>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* alignItems */}
                  <FormField
                    control={form.control}
                    name="alignItems"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex gap-2">
                          <RxAlignCenterVertically />
                          Align Vertically
                        </FormLabel>
                        <FormControl>
                          <Tabs
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <TabsList>
                              <TabsTrigger value="start">
                                <RxAlignTop />
                              </TabsTrigger>
                              <TabsTrigger value="center">
                                <RxAlignCenterVertically />
                              </TabsTrigger>
                              <TabsTrigger value="end">
                                <RxAlignBottom />
                              </TabsTrigger>
                            </TabsList>
                          </Tabs>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex gap-4">
                  {/* width */}
                  <FormField
                    control={form.control}
                    name="width"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="flex gap-2">
                          <RxWidth /> Width
                        </FormLabel>
                        <FormControl>
                          <Input type="number" max={256} min={24} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* height */}
                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="flex gap-2">
                          <RxHeight /> Height
                        </FormLabel>
                        <FormControl>
                          <Input type="number" max={256} min={24} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* borderRadius */}
                  <FormField
                    control={form.control}
                    name="borderRadius"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="flex gap-2">
                          <RxCornerTopLeft />
                          Border Radius
                        </FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* text */}
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-2">
                        <RxText />
                        Text
                      </FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* textAlign */}
                <FormField
                  control={form.control}
                  name="textAlign"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-2">
                        <RxTextAlignCenter />
                        Text Align
                      </FormLabel>
                      <FormControl>
                        <Tabs
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <TabsList>
                            <TabsTrigger value="start">
                              <RxTextAlignLeft />
                            </TabsTrigger>
                            <TabsTrigger value="center">
                              <RxTextAlignCenter />
                            </TabsTrigger>
                            <TabsTrigger value="end">
                              <RxTextAlignRight />
                            </TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* fontWeight */}
                <FormField
                  control={form.control}
                  name="fontWeight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-2">
                        <RxFontBold />
                        Font Weight
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={100}
                          max={900}
                          step={100}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* fontSize */}
                <FormField
                  control={form.control}
                  name="fontSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-2">
                        <RxFontSize />
                        Font Size
                      </FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* lineHight */}
                <FormField
                  control={form.control}
                  name="lineHeight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-2">
                        <CgFontHeight />
                        Font Height
                      </FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* letterSpacing */}
                <FormField
                  control={form.control}
                  name="letterSpacing"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-2">
                        <CgFontSpacing />
                        Font Spacing
                      </FormLabel>
                      <FormControl>
                        <Input type="number" className="mt-0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* color */}
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-2">
                        <CgFormatColor />
                        Color
                      </FormLabel>
                      <div className="flex">
                        <FormControl>
                          <Input
                            type="color"
                            className="rounded-r-none"
                            list="colors"
                            {...field}
                          />
                        </FormControl>
                        <Input
                          type="text"
                          placeholder="#ffffff"
                          className="rounded-l-none"
                          {...field}
                        />
                      </div>
                      <datalist id="colors">
                        <option value="#e2e2e2" />
                        <option value="#ff75c3" />
                        <option value="#ffa647" />
                        <option value="#ffe83e" />
                        <option value="#9fff5b" />
                        <option value="#70e2ff" />
                        <option value="#cd93ff" />
                        <option value="#0a203f" />
                      </datalist>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Background */}
                {/* Background Color */}
                <FormField
                  control={form.control}
                  name="backgroundColor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-2">
                        <CgColorBucket />
                        Background Color
                      </FormLabel>
                      <div className="flex">
                        <FormControl>
                          <Input
                            type="color"
                            className="rounded-r-none"
                            list="background-colors"
                            {...field}
                          />
                        </FormControl>
                        <Input
                          type="text"
                          placeholder="#ffffff"
                          className="rounded-l-none"
                          {...field}
                        />
                      </div>
                      <datalist id="background-colors">
                        <option value="#e2e2e2" />
                        <option value="#ff75c3" />
                        <option value="#ffa647" />
                        <option value="#ffe83e" />
                        <option value="#9fff5b" />
                        <option value="#70e2ff" />
                        <option value="#cd93ff" />
                        <option value="#0a203f" />
                      </datalist>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Download
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
}
