"use client";

interface EmailHeadersProps {
  headerDetails: string | undefined;
}

const EmailHeaders: React.FC<EmailHeadersProps> = ({ headerDetails }) => {
  return (
    <div className="px-16 my-8" id="results">
      {headerDetails && (
        <>
          <h3 className="text-2xl font-bold mb-2">Email Headers</h3>
          <div className="mockup-code">
            <pre data-prefix="~" className="text-xs text-sky-500">
              <code
                style={{
                  display: "block",
                  marginLeft: "50px",
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  wordBreak: "break-all",
                }}
              >
                {headerDetails}
              </code>
            </pre>
          </div>
        </>
      )}
    </div>
  );
};

export default EmailHeaders;
