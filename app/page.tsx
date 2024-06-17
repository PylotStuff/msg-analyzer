"use client";

import { useState } from "react";
import FileInput from "./components/FileInput";
import EmailHeaders from "./components/Headers";
import AttachmentsHeaders from "./components/Attachments";
import { FieldsData } from "@kenjiuno/msgreader";

const Home: React.FC = () => {
  const [details, setDetails] = useState<FieldsData | null>(null);

  return (
    <>
      <FileInput onDataExtracted={(details: FieldsData) => setDetails(details)} />
      {/* Results */}
      <EmailHeaders headerDetails={details?.headers} />
      <AttachmentsHeaders attachmentsDetails={details?.attachments} />
    </>
  );
};

export default Home;
