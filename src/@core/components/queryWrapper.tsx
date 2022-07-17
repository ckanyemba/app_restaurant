import { Button } from "@mui/material";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";
// import Loader from "./Loader";
// import Result from "./Result";

type QueryWrapperProps = {
  children: React.ReactNode;
};

const QueryWrapper = ({ children }: QueryWrapperProps) => {
  const { reset } = useQueryErrorResetBoundary();
  //   const { t } = useTranslation();

  return (
    // <ErrorBoundary
    //   onReset={reset}
    //   fallbackRender={({ resetErrorBoundary }) => (
    //     <Result
    //       extra={
    //         <Button onClick={() => resetErrorBoundary()} variant="contained">
    //           {"Retry"}
    //         </Button>
    //       }
    //       status="error"
    //       //   subTitle={t("common.errors.unexpected.subTitle")}
    //       subTitle={"Subtitle"}
    //       //   title={t("common.errors.unexpected.title")}
    //       title={"title"}
    //     />
    //   )}
    // >
    //   {/* <React.Suspense fallback={<Loader />}>{children}</React.Suspense> */}
    // </ErrorBoundary>
    <h2>Ok</h2>
  );
};

export default QueryWrapper;
