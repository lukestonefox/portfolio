function Experience() {
  return (
    <section id="experience" className="flex flex-col h-screen py-8 gap-y-8 w-full items-center justify-center">
        <div className="flex flex-row gap-x-4 w-full">
            <p className="text-nowrap w-[10%]">AUG - DEC 2024</p>
            <div className="w-[80%]">
                <h1 className="font-semibold text-nowrap">
                    Software Engineer Co-op @ Cincinnati Children's Hospital
                </h1>
                <div>
                    <div className="flex flex-col">
                        Developed a internal dynamic Angular web application servicing healthcare providers. Wrote unit tests for API routes and data functionality layer.
                    </div>
                </div>
                <div>
                    Technologies here
                </div>
            </div>
        </div>
        <div className="flex flex-row gap-x-4 w-full">
            <p className="text-nowrap w-[10%]">JAN - APR 2024</p>
            <div className="w-[80%]">
                <h1 className="font-semibold text-nowrap">
                    Web Applications Developer and Designer Co-op @ Cincinnati Children's Hospital
                </h1>
                <div className="flex flex-col">
                    Designed and developed components to create a design system 
                </div>
                <div>
                    technologies here
                </div>
            </div>
        </div>
    </section>
  );
}

export default Experience;