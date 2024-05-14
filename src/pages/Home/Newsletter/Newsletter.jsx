import { toast } from "react-toastify"

const Newsletter = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Subscribed to newsletter")
  }

  return (
    <section data-aos="slide-up">
      <div className="bg-orange-400 h-[15rem] flex justify-center items-center">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Subscribe To Our Newsletter</button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-2">Provide Your Email Address</h3>
            <form action="" onSubmit={handleSubmit}>
              <input type="text" placeholder="your email address..." className="input input-bordered w-full max-w-xs" />
              <input type="submit" className="btn ml-2" value="Submit" />
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </section>
  )
}

export default Newsletter