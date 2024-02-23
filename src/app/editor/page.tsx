"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

import { toPng } from "html-to-image";

import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  MdAlignHorizontalCenter,
  MdAlignHorizontalLeft,
  MdAlignHorizontalRight,
  MdAlignVerticalBottom,
  MdAlignVerticalCenter,
  MdAlignVerticalTop,
} from "react-icons/md";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  alignItems: z.string(),
  justifyContent: z.string(),
  width: z.coerce.number(),
  height: z.preprocess((v) => Number(v), z.number()),
  text: z.string(),
  fontWeight: z.preprocess((v) => Number(v), z.number()),
  fontSize: z.preprocess((v) => Number(v), z.number()),
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
      fontWeight: 400,
      fontSize: 16,
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
                  fontWeight: form.watch("fontWeight"),
                  fontSize: `${form.watch("fontSize") || 0}px`,
                  color: form.watch("color"),
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
                        <FormControl>
                          <Tabs
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <TabsList>
                              <TabsTrigger value="start">
                                <MdAlignHorizontalLeft />
                              </TabsTrigger>
                              <TabsTrigger value="center">
                                <MdAlignHorizontalCenter />
                              </TabsTrigger>
                              <TabsTrigger value="end">
                                <MdAlignHorizontalRight />
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
                        <FormControl>
                          <Tabs
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <TabsList>
                              <TabsTrigger value="start">
                                <MdAlignVerticalTop />
                              </TabsTrigger>
                              <TabsTrigger value="center">
                                <MdAlignVerticalCenter />
                              </TabsTrigger>
                              <TabsTrigger value="end">
                                <MdAlignVerticalBottom />
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
                      <FormItem>
                        <FormLabel>Width</FormLabel>
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
                      <FormItem>
                        <FormLabel>Height</FormLabel>
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
                      <FormItem>
                        <FormLabel>Border Radius</FormLabel>
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
                      <FormLabel>Text</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
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
                      <FormLabel>Font Weight</FormLabel>
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
                      <FormLabel>Font Size</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
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
                      <FormLabel>Color</FormLabel>
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
                      <FormLabel>Background Color</FormLabel>
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
