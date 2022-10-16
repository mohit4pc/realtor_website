import React, { useState } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    discountedPrice: 0,
    regularPrice: 0,
  });
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;
  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex gap-5">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "rent" ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            Sale
          </button>
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sale" ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            Rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <div className="flex space-x-6 justify-start">
          <div className="">
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min="1"
              max="50"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-700 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-state-600 text-center"
            />
          </div>
          <div className="">
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min="1"
              max="50"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-700 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-state-600 text-center"
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Parking Spot</p>
        <div className="flex gap-5">
          <button
            type="button"
            id="parking"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
              !parking ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            YES
          </button>
          <button
            type="button"
            id="parking"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
              parking ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            NO
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex gap-5">
          <button
            type="button"
            id="furnished"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
              !furnished ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            YES
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            NO
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Offer</p>
        <div className="flex gap-5 mb-5">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
              !offer ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            YES
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            NO
          </button>
        </div>
        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold ">Regular Price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                id="discountedPrice"
                value={discountedPrice}
                onChange={onChange}
                min="50"
                max="400000000"
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center "
              />

              {type === "rent" && (
                <div>
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className="flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold ">Discounted Price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min="50"
                  max="400000000"
                  required={offer}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center "
                />
                {type === "rent" && (
                  <div>
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <p className="text-lg font-se">Images</p>
          <p>The First image will be the cover (max 6 Image)</p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg, .png, .jpeg"
            multiple
            required

          />
        </div>
      </form>
    </main>
  );
}
