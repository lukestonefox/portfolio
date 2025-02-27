import Chip from "./Chip";

function Experience() {
  return (
    <section id="experience" className="flex flex-col h-screen py-8 gap-y-16 w-full items-center justify-center">
        <div className="flex flex-row gap-x-4 w-full">
            <p className="text-nowrap w-[15%] text-end font-semibold text-md">AUG - DEC 2024</p>
            <div className="w-[60%] flex flex-col gap-y-2">
                <h1 className="font-semibold text-nowrap text-lg">
                    Software Engineer Co-op @ Cincinnati Children's Hospital
                </h1>
                <div>
                    <div className="flex flex-col">
                        Developed an internal dynamic Angular web application servicing healthcare providers. Wrote unit tests for API routes and data functionality layer.
                    </div>
                </div>
                <div className="w-min flex flex-row gap-x-2">
                    <Chip label="Angular" />
                    <Chip label="TypeScript" />
                    <Chip label="Figma" />
                    <Chip label="Swagger" />
                    <Chip label="C#" />
                </div>
            </div>
        </div>
        <div className="flex flex-row gap-x-4 w-full">
            <p className="text-nowrap w-[15%] text-end font-semibold">JAN - APR 2024</p>
            <div className="w-[60%] flex flex-col gap-y-2">
                <h1 className="font-semibold text-nowrap text-lg">
                    Web Applications Developer and Designer Co-op @ Cincinnati Children's Hospital
                </h1>
                <div className="flex flex-col">
                    Designed and developed components to create a design system 
                </div>
                <div className="w-min flex flex-row gap-x-2">
                    <Chip label="React" />
                    <Chip label="TypeScript" />
                    <Chip label="Figma" />
                    <Chip label="Storybook" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Experience;