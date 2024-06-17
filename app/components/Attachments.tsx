"use client";

interface AttachmentsInterface {
  attachmentsDetails: Array<any> | undefined;
}

const AttachmentsHeaders: React.FC<AttachmentsInterface> = ({
  attachmentsDetails,
}) => {
  return (
    <div className="px-16 my-8">
      {attachmentsDetails && attachmentsDetails.length > 0 &&(
        <>
          <h3 className="text-2xl font-bold">Attachments</h3>
          <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            {attachmentsDetails.map((item) => (
              <>
                <div className="flex flex-col pb-3">
                  <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                    {item.attachMimeTag}
                  </dt>
                  <dd className="text-lg font-semibold">{item.fileName}</dd>
                </div>
              </>
            ))}
          </dl>
        </>
      )}
    </div>
  );
};

export default AttachmentsHeaders;
