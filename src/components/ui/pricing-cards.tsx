import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge className="bg-gradient-to-r from-[#D87027] to-[#D87027] text-white border-[#D87027] shadow-lg shadow-[#D87027]/30 px-4 py-2 text-sm font-medium">Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Affordable Plans for Every Retail Store
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Choose a plan that fits your business size—software + hardware bundles available.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Starter
                  </span>
                </CardTitle>
                <CardDescription>
                  1 Store, Basic Features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">$29</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Fast Checkout</p>
                        <p className="text-muted-foreground text-sm">
                          Quick and efficient transaction processing.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Basic Inventory</p>
                        <p className="text-muted-foreground text-sm">
                          Simple inventory management tools.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Email Support</p>
                        <p className="text-muted-foreground text-sm">
                          Get help via email when needed.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4">
                    Sign up today <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full shadow-2xl rounded-md bg-gradient-to-br from-amber-50 to-orange-100 border-amber-300">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Professional
                  </span>
                </CardTitle>
                <CardDescription>
                  Growing Stores, Full Features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">$79</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>All Starter Features</p>
                        <p className="text-muted-foreground text-sm">
                          Includes everything from the Starter plan.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Multi-Store</p>
                        <p className="text-muted-foreground text-sm">
                          Manage multiple locations seamlessly.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Advanced Reporting</p>
                        <p className="text-muted-foreground text-sm">
                          Detailed analytics and insights.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Phone Support</p>
                        <p className="text-muted-foreground text-sm">
                          Direct phone assistance available.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="gap-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold">
                    Sign up today <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Enterprise
                  </span>
                </CardTitle>
                <CardDescription>
                  Multi-Store, Custom Solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">Custom</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      pricing
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>All Professional Features</p>
                        <p className="text-muted-foreground text-sm">
                          Everything in Professional plus more.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>API Access</p>
                        <p className="text-muted-foreground text-sm">
                          Integrate with your systems.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Dedicated Manager</p>
                        <p className="text-muted-foreground text-sm">
                          Personal account management.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>On-Site Setup</p>
                        <p className="text-muted-foreground text-sm">
                          Professional installation services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4">
                    Book a meeting <PhoneCall className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };