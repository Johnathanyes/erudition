"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import React, { useState } from "react";
import { Upload } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadDocumentForm from "./upload-document-form";

const UploadDocumentButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button className="flex gap-2 items-center">
          <Upload className="w-4 h-4"/>
          Upload Document
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload a Document</DialogTitle>
          <DialogDescription>
            Upload a team document for you to search over in the future.
          </DialogDescription>
          <UploadDocumentForm onUpload={() => setIsOpen(false)} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UploadDocumentButton;