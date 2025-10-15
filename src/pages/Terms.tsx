import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Fitville INC</span>
          </Link>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Terms of Service</CardTitle>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Fitville INC services, you accept and agree to be bound by the 
                terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Use of Services</h2>
              <p className="text-muted-foreground">
                You may use our services only for lawful purposes and in accordance with these Terms. 
                You agree not to use the services in any way that violates any applicable federal, 
                state, local, or international law or regulation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Intellectual Property</h2>
              <p className="text-muted-foreground">
                The service and its original content, features, and functionality are and will remain 
                the exclusive property of Fitville INC and its licensors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall Fitville INC be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
              <p className="text-muted-foreground">
                Questions about the Terms of Service should be sent to us at fitvillejoe@gmail.com
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;