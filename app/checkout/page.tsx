// import React from "react";

// const CheckoutPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="py-6 bg-white shadow">
//         <div className="container mx-auto px-4">
//           <h1 className="text-lg font-semibold">Nike</h1>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Column: Form */}
//           <section className="bg-white p-6 shadow-md rounded-lg">
//             <h2 className="text-xl font-bold mb-4">
//               How would you like to get your order?
//             </h2>
//             <p className="text-sm mb-6">
//               Customs regulation for India requires a copy of the recipient's
//               KYC...
//             </p>

//             <form className="space-y-4">
//               <div className="space-y-2">
//                 <label htmlFor="firstName" className="block text-sm font-medium">
//                   First Name
//                 </label>
//                 <input
//                   id="firstName"
//                   type="text"
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="lastName" className="block text-sm font-medium">
//                   Last Name
//                 </label>
//                 <input
//                   id="lastName"
//                   type="text"
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label
//                   htmlFor="addressLine1"
//                   className="block text-sm font-medium"
//                 >
//                   Address Line 1
//                 </label>
//                 <input
//                   id="addressLine1"
//                   type="text"
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="postalCode" className="block text-sm font-medium">
//                   Postal Code
//                 </label>
//                 <input
//                   id="postalCode"
//                   type="text"
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="email" className="block text-sm font-medium">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="pan" className="block text-sm font-medium">
//                   PAN
//                 </label>
//                 <input
//                   id="pan"
//                   type="text"
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="rounded" />
//                   <span className="text-sm">
//                     I agree to the terms and conditions.
//                   </span>
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//               >
//                 Continue
//               </button>
//               </form>
//           </section>

//           {/* Right Column: Order Summary */}
//           <section className="bg-white p-6 shadow-md rounded-lg">
//             <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//             <ul className="space-y-4">
//               <li className="flex justify-between items-center">
//                 <div>
//                   <h3 className="font-medium">Nike Dri-FIT ADV</h3>
//                   <p className="text-sm text-gray-600">Men's T-shirt</p>
//                 </div>
//                 <span>₹2,895.00</span>
//               </li>

//               <li className="flex justify-between items-center">
//                 <div>
//                   <h3 className="font-medium">Nike Air Max 97</h3>
//                   <p className="text-sm text-gray-600">Men's Shoes</p>
//                 </div>
//                 <span>₹18,995.00</span>
//               </li>
//             </ul>

//             <div className="border-t mt-4 pt-4 flex justify-between items-center">
//               <h3 className="font-semibold">Total</h3>
//               <span>₹20,890.00</span>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CheckoutPage;
// import { Input, Button, Select, Checkbox } from "@shadcn/ui/";
"use client"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Select} from "@/components/ui/select"
import {Checkbox} from "@/components/ui/checkbox"
import { useState } from "react";


export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    locality: "",
    state: "India",
    email: "",
    phone: "",
    pan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-screen-lg mx-auto">
      {/* Left Section */}
      <div className="flex-1">
        <h1 className="text-lg font-bold">How would you like to get your order?</h1>
        <p className="text-sm text-gray-600 mt-2">
          Customs regulation for India requires a copy of the recipient's KYC. The address on the KYC must match the shipping
          address. Learn more.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <h2 className="font-semibold">Enter your name and address:</h2>
            <Input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="my-2"
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="my-2"
            />
            <Input
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="my-2"
            />
            <Input
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              className="my-2"
            />
            <Input
              name="locality"
              placeholder="Locality"
              value={formData.locality}
              onChange={handleChange}
              className="my-2"
            />
            <Select
              name="state"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="my-2"
            >
              <option value="India">India</option>
              {/* Add more states here */}
            </Select>
            <Checkbox label="Save this address to my profile" className="my-2" />
            <Checkbox label="Make this my preferred address" className="my-2" />
          </div>

          <div>
            <h2 className="font-semibold">What's your contact information?</h2>
            <Input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="my-2"
            />
            <Input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="my-2"
            />
          </div>

          <div>
            <h2 className="font-semibold">What's your PAN?</h2>
            <Input
              name="pan"
              placeholder="PAN"
              value={formData.pan}
              onChange={handleChange}
              className="my-2"
            />
          </div>

          <Button className="mt-4 w-full">Continue</Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 border p-4 rounded-lg shadow-md">
        <h2 className="font-bold">Order Summary</h2>
        <div className="space-y-2 mt-4">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹20,890.00</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery/Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Total</p>
            <p>₹20,890.00</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-600">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <img src="/g1.png" alt="Shirt" className="w-12 h-12" />
              <div className="ml-4">
                <p>Nike Dri-FIT ADV Techknit</p>
                <p>Size: M</p>
                <p>Qty: 1</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/Rectangle (1).png" alt="Shoes" className="w-12 h-12" />
              <div className="ml-4">
                <p>Nike Air Max 97</p>
                <p>Size: 9</p>
                <p>Qty: 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}