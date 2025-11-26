import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const portfolioCards = [
  {
    id: 1,
    image: "#d9d9d9",
  },
  {
    id: 2,
    image: "#d9d9d9",
  },
];

const paginationDots = [{ active: true }, { active: false }, { active: false }];

export const PortfolioSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#dce5e5] py-14 px-20">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="[-webkit-text-stroke:1px_#000000] [font-family:'Poppins',Helvetica] font-semibold text-black text-3xl tracking-[0] leading-[normal] mb-[113px]">
          Portfolio
        </h2>

        <Tabs defaultValue="development" className="w-full">
          <div className="flex justify-center mb-[43px]">
            <TabsList className="bg-white rounded-[25px] h-[65px] w-[845px] p-[10px]">
              <TabsTrigger
                value="development"
                className="bg-[#344647] data-[state=active]:bg-[#344647] rounded-[20px] h-[45px] flex-1 [font-family:'Poppins',Helvetica] font-normal text-white data-[state=active]:text-white text-[25px] tracking-[0] leading-[normal]"
              >
                Development
              </TabsTrigger>
              <TabsTrigger
                value="design"
                className="data-[state=active]:bg-[#344647] rounded-[20px] h-[45px] flex-1 [font-family:'Poppins',Helvetica] font-normal text-[#344647] data-[state=active]:text-white text-[25px] tracking-[0] leading-[normal]"
              >
                Design
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="development" className="mt-0">
            <div className="grid grid-cols-2 gap-[25px] mb-[25px]">
              {portfolioCards.map((card) => (
                <Card
                  key={card.id}
                  className="bg-white rounded-[20px] border-0 shadow-none"
                >
                  <CardContent className="p-0">
                    <div
                      className="w-full h-[188px] rounded-t-[20px]"
                      style={{ backgroundColor: card.image }}
                    />
                    <div className="h-[187px]" />
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-4 flex-1">
                {paginationDots.map((dot, index) => (
                  <div
                    key={index}
                    className={`w-[15px] h-[15px] rounded-[7.5px] ${
                      dot.active ? "bg-[#1e2929]" : "bg-neutral-100"
                    }`}
                  />
                ))}
              </div>
              <ChevronRightIcon className="w-[50px] h-[25px] text-[#344647]" />
            </div>
          </TabsContent>

          <TabsContent value="design" className="mt-0">
            <div className="grid grid-cols-2 gap-[25px] mb-[25px]">
              {portfolioCards.map((card) => (
                <Card
                  key={card.id}
                  className="bg-white rounded-[20px] border-0 shadow-none"
                >
                  <CardContent className="p-0">
                    <div
                      className="w-full h-[188px] rounded-t-[20px]"
                      style={{ backgroundColor: card.image }}
                    />
                    <div className="h-[187px]" />
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-4 flex-1">
                {paginationDots.map((dot, index) => (
                  <div
                    key={index}
                    className={`w-[15px] h-[15px] rounded-[7.5px] ${
                      dot.active ? "bg-[#1e2929]" : "bg-neutral-100"
                    }`}
                  />
                ))}
              </div>
              <ChevronRightIcon className="w-[50px] h-[25px] text-[#344647]" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
