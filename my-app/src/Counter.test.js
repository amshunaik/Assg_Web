// import Counter from "./Counter";
// import { render } from "@testing-library/react";

// describe("Counter Component", () => {
//     it("displays the correct initial count", () => {
//         const { getByTestId } = render(<Counter initialCount={10} />);
//         const countValue = Number(getByTestId("count").textContent.split(":")[1].trim());
//         expect(countValue).toEqual(10);
//     });
// });


import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
    it("displays the correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={10} />);
        const countValue = Number(getByTestId("count").textContent.split(":")[1].trim());
        expect(countValue).toEqual(10);
    });


    it("Count should increment by 1 if the inc button is clicked",()=>{
        const {getByTestId, getByRole}=render(<Counter initialCount={0}/>);
        const incrementbtn=getByRole("button",{name:"Increment"});
        fireEvent.click(incrementbtn);
        const countValue=Number(getByTestId("count").textContent.split(":")[1].trim());
        expect(countValue).toEqual(1);
       // const countValue=Number(screen.getByTestId("count").textContent);
    });

    it("Count has decremented , when the button was clicked ",()=>{
        const {getByTestId,getByRole}=render(<Counter initialCount={2}/>);
        const decbtn=getByRole("button",{name:"Decrement"});
        const countValue1=Number(getByTestId("count").textContent.split(":")[1].trim());
        expect(countValue1).toEqual(2);
        
        fireEvent.click(decbtn);
        const countValue=Number(getByTestId("count").textContent.split(":")[1].trim());
        expect(countValue).toEqual(1);
    })
});
