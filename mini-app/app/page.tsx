use client
import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Share } from "@/components/share";
import { url } from "@/lib/metadata";

export { generateMetadata };

export default function Home() {
   // NEVER write anything here, only use this page to import components
   const [tokens, setTokens] = useState("");
   const [dialogOpen, setDialogOpen] = useState(false);
   const [dialogTitle, setDialogTitle] = useState("");
   const [dialogDescription, setDialogDescription] = useState("");

   const handleAnalyze = () => {
     setDialogTitle("Portfolio Analysis");
     setDialogDescription("Analysis results: ...");
     setDialogOpen(true);
   };

   const handleCompare = () => {
     setDialogTitle("Token Comparison");
     setDialogDescription("Comparison results: ...");
     setDialogOpen(true);
   };

   const handleExplain = () => {
     setDialogTitle("Diversification Explained");
     setDialogDescription("Diversification is the practice of spreading investments across different assets to reduce risk.");
     setDialogOpen(true);
   };
  return (
    <main className="flex flex-col gap-4 place-items-center place-content-center px-4 grow">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>

      <Textarea
        placeholder="Enter token symbols separated by commas"
        className="w-full max-w-md"
        value={tokens}
        onChange={(e) => setTokens(e.target.value)}
      />

      <div className="flex gap-2">
        <Button onClick={handleAnalyze}>Analyze My Portfolio</Button>
        <Button variant="outline" onClick={handleCompare}>Compare Tokens</Button>
        <Button variant="secondary" onClick={handleExplain}>Explain Diversification</Button>
      </div>

      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
            <AlertDialogDescription>{dialogDescription}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
