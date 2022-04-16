import { useState } from "react";
import "./proof.css";
import Dropzone, { useDropzone } from "react-dropzone";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Button from "../../components/button/Button";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Proof = () => {
  const [paymentImg, setPaymentImg] = useState(null);
  const [idImg, setIdImg] = useState(null);
  const [paymentFile, setPaymentFile] = useState(null);
  const [idFile, setidFile] = useState(null);

  const orderId = useSelector((state) => state.order.details._id);
  console.log({ orderId });
  const handleProofDrop = (accepted) => {
    const file = accepted[0];
    console.log({ file });
    const fileObj = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    console.log({ fileObj });
    setPaymentFile(file);
    setPaymentImg(fileObj);
  };

  const handleIDDrop = (accepted) => {
    const file = accepted[0];
    console.log({ file });
    const fileObj = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    console.log({ fileObj });
    setidFile(file);
    setIdImg(fileObj);
  };

  const handleFinish = async () => {
    console.log({ paymentFile, idFile });
    let body = new FormData();
    body.append("order", orderId);
    body.append("proof", paymentFile);
    body.append("idCard", idFile);

    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/payment`, {
      method: "POST",
      headers: {},
      body,
    });
    const data = await res.json();
    if (data.success) {
      toast.success("Your order is being processed");
      localStorage.clear();
      setTimeout(() => (window.location = "/"), 3000);
    } else {
      toast.error("Something went wrong! Please try again later");
    }
  };

  return (
    <div className="proof">
      <section>
        <h1 className="text-center">Payment</h1>
        <h1 className="light text-center">
          Upload your proof of payment here:
        </h1>

        <div className="center drag-container payment-proof">
          <Dropzone
            accept="image/jpeg,image/png"
            maxFiles={1}
            onDrop={handleProofDrop}
            className="dropzone center col"
            multiple={false}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: "dropzone" })}>
                {!!paymentImg && (
                  <img className="preview" src={paymentImg.preview} />
                )}
                <CloudUploadOutlinedIcon style={{ fontSize: "100px" }} />
                <h2>Drag & Drop</h2>
                <h2>OR</h2>
                <button>Browse Files</button>
              </div>
            )}
          </Dropzone>
        </div>

        <div className="id-container">
          <h1 className="light text-center">
            Upload your valid Identification Card (ID) here for verification:
          </h1>

          <div className="center drag-container id-proof">
            <Dropzone
              accept="image/jpeg,image/png"
              maxFiles={1}
              onDrop={handleIDDrop}
              className="dropzone center col"
              multiple={false}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                  {!!idImg && <img className="preview" src={idImg.preview} />}
                  <CloudUploadOutlinedIcon style={{ fontSize: "100px" }} />
                  <h2>Drag & Drop</h2>
                  <h2>OR</h2>
                  <button>Browse Files</button>
                </div>
              )}
            </Dropzone>
          </div>
        </div>

        <div className="center">
          <h1 className="text-center light confirm">
            You'll receive your order confirmation via email shortly after
            submitting your proof of payment.
          </h1>
        </div>
        <div className="bottom flex-end">
          <Button onClick={handleFinish}>Finish</Button>
        </div>
      </section>
    </div>
  );
};

export default Proof;
