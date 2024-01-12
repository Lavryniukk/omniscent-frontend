"use client";
import ErrorAlert from "@/app/UI/alerts/ErrorAlert/ErrorAlert";
import Button from "@/app/UI/buttons/Button";

const RoadmapsFetchErrorComponent = () => {
  return (
    <>
      <h1 className="text-2xl text-center font-bold mx-auto text-text  font-inter">
        Whoops, error occurred! If this error persists, please contact us.
      </h1>
      <Button
        callback={() => {
          location.reload();
        }}
      >
        Retry
      </Button>
      <ErrorAlert message="An error occurred while loading your projects. Please try again later." />
    </>
  );
};
export default RoadmapsFetchErrorComponent;
