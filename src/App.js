import { useState } from "react";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Header from "./components/Header";
import TableForm from "./components/TableForm";
function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("Riyaansh Mittal");
  const [address, setAddress] = useState(
    "2333/11, Sector 65, Phase 11, Mohali"
  );
  const [email, setEmail] = useState("riyaanshmittal14@gmail.com");
  const [phone, setPhone] = useState("9410681720");
  const [bankName, setBankName] = useState("SBI");
  const [bankAccount, setBankAccount] = useState("7328973892473892");
  const [website, setWebsite] = useState(
    "https://192.168.1.1:8090/httpclient.html"
  );
  const [clientName, setClientName] = useState("John Doe");
  const [clientAddress, setClientAddress] = useState("johndoe@example.com");
  const [invoiceNumber, setInvoiceNumber] = useState("1004");
  const [invoiceDate, setInvoiceDate] = useState("01-02-2024");
  const [dueDate, setDueDate] = useState("10-03-2024");
  const [notes, setNotes] = useState("Pay ot the bank account indicated above");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const handlePrint = () => {
    window.print();
  };
  return (
    <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
      {showInvoice ? (
        <div className="flex flex-col justify-between">
          <div>
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address} />

            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />

            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />

            <Table
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />

            <Notes notes={notes} />
          </div>

          <Footer
            name={name}
            email={email}
            address={address}
            website={website}
            phone={phone}
            bankAccount={bankAccount}
            bankName={bankName}
          />
          <button
            className=" mt-5 bg-blue-500 text-white 
          font-bold py-2 px-8 rounded shadow 
          border-2 border-blue-500 
          hover:bg-transparent hover:text-blue-500 
          transition-all duration-300"
            onClick={() => {
              setShowInvoice((prev) => !prev);
            }}
          >
            Edit Information
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center">
            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="name">Your full name </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address">Enter your address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your address"
                  autoComplete="off"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </article>
            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="email">Enter your Email:</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="website">Enter your Website:</label>
                <input
                  type="text"
                  name="website"
                  id="website"
                  placeholder="Enter your website"
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">Enter your Phone No.:</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your Phone No."
                  autoComplete="off"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </article>
            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="bankName">Enter your Bank Name:</label>
                <input
                  type="text"
                  name="bankName"
                  id="bankName"
                  placeholder="Enter your bank Name"
                  autoComplete="off"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="bankAccount">
                  Enter your Bank Account Number:
                </label>
                <input
                  type="text"
                  name="bankAccount"
                  id="bankAccount"
                  placeholder="Enter your bank Account"
                  autoComplete="off"
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                />
              </div>
            </article>
            <article className="md:grid grid-cols-2 gap-10 md:mt-20">
              <div className="flex flex-col">
                <label htmlFor="clientName">Enter your Client's Name:</label>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  placeholder="Enter your Client's Name"
                  autoComplete="off"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="clientAddress">
                  Enter your Client's Address:
                </label>
                <input
                  type="text"
                  name="clientAddress"
                  id="clientAddress"
                  placeholder="Enter your Client's Address"
                  autoComplete="off"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                />
              </div>
            </article>
            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="invoiceNumber">
                  Enter your Invoice Number:
                </label>
                <input
                  type="text"
                  name="invoiceNumber"
                  id="invoiceNumber"
                  placeholder="Enter your Invoice Number"
                  autoComplete="off"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="invoiceDate">Enter your Invoice Date:</label>
                <input
                  type="date"
                  name="invoiceDate"
                  id="invoiceDate"
                  autoComplete="off"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="dueDate">Enter your Due Date:</label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  autoComplete="off"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </article>

            {/* This is our table form */}
            <article>
              <TableForm
                description={description}
                setDescription={setDescription}
                quantity={quantity}
                setQuantity={setQuantity}
                price={price}
                setPrice={setPrice}
                amount={amount}
                setAmount={setAmount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
            </article>
            <label htmlFor="notes">Additional Notes:</label>
            <textarea
              name="notes"
              id="notes"
              cols="30"
              rows="10"
              placeholder="Additional Notes to the client"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <button
              className="mt-5 bg-blue-500 text-white 
          font-bold py-2 px-8 rounded shadow 
          border-2 border-blue-500 
          hover:bg-transparent hover:text-blue-500 
          transition-all duration-300"
              onClick={() => {
                setShowInvoice((prev) => !prev);
              }}
            >
              Preview Invoice
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
