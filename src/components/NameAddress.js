import React, { useState } from "react";

function NameAddress() {
  const initialDetailsState = {
    date: "",
    typeOfOrganization: " ",
    memberNumber: "00001",
    area: " ",
    firstName: " ",
    lastName: " ",
    nepaliName: " ",
    permanentAddress: {
      address: " ",
      ward: 0,
      municipality: " ",
    },
    temporaryAddress: {
      address: " ",
      ward: 0,
      municipality: " ",
    },
    postalAddress: " ",
    nepaliAddress: " ",
    residenceTelNo: " ",
    OfficeTelNo: " ",
    mobileNo: " ",
    email: " ",
    referenceFrom: " ",
    responsibleStaff: " ",
    accountOwnershipType: " ",
    panNumber: " ",
    panDate: " ",
    panDistrict: " ",
    annualTurnover: " ",
    numOfTransaction: " ",
    riskCategory: " ",
    mobileBanking: {
      number: " ",
      check: false,
    },
  };

  const [details, setDetails] = useState(initialDetailsState);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("details", details);
  };
  const handleCancel = () => {
    setDetails(initialDetailsState);
  };
  return (
    <div>
      <form className="container-fluid" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label className="col-md-4">Date: </label>
            <input
              type="date"
              className=" text col-md-8"
              value={details.date}
              onChange={(e) => setDetails({ ...details, date: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <div
              className="d-flex"
              onChange={(e) =>
                setDetails({
                  ...details,
                  typeOfOrganization: e.target.value,
                })
              }
            >
              <div className="col-md-4">
                <input
                  type="radio"
                  value=" Institutional"
                  name="typeOfOrganization"
                />{" "}
                Institutional
              </div>
              <div className="col-md-4">
                <input type="radio" value="Person" name="typeOfOrganization" />{" "}
                Person
              </div>
              <div className="col-md-4">
                <input type="radio" value="Joint" name="typeOfOrganization" />{" "}
                Joint
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="memberNo" className="col-md-4">
              Member Number:
            </label>
            000001
          </div>
          <div className="col-md-6">
            <label className="col-md-4">Area/Group: </label>
            <select
              className="col-md-8 text "
              value={details.area}
              onChange={(e) => setDetails({ ...details, area: e.target.value })}
            >
              <option value="">------</option>
              <option value="Area 1"> Area 1</option>
              <option value="Area 1"> Area 2</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="firstName" className="col-md-4">
              First & Middle Name:
            </label>
            <input
              type="text"
              className="col-md-8 text "
              value={details.firstName}
              onChange={(e) =>
                setDetails({ ...details, firstName: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="col-md-4">
              LastName:
            </label>
            <input
              value={details.lastName}
              type="text"
              className="col-md-8 text "
              onChange={(e) =>
                setDetails({ ...details, lastName: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="nepaliName" className="col-md-2">
              नेपाली नाम:
            </label>
            <input
              value={details.nepaliAddress}
              type="text"
              className="col-md-10 text "
              onChange={(e) =>
                setDetails({ ...details, nepaliName: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="parmanentAddress" className="col-md-4">
              Permanent Address:
            </label>
            <input
              value={details.permanentAddress.address}
              type="text"
              className="col-md-8 text "
              onChange={(e) =>
                setDetails({
                  ...details,
                  permanentAddress: { address: e.target.value },
                })
              }
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="permanentWard" className="col-md-4">
              Ward:
            </label>
            <input
              value={details.permanentAddress.ward}
              type="number"
              className="col-md-8 text "
              onChange={(e) =>
                setDetails({
                  ...details,
                  permanentAddress: { ward: e.target.value },
                })
              }
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="permanentMunicipality" className="col-md-4">
              Municipality:
            </label>
            <select
              value={details.permanentAddress.municipality}
              className="col-md-8 text "
              onChange={(e) =>
                setDetails({
                  ...details,
                  permanentAddress: { municipality: e.target.value },
                })
              }
            >
              <option value="banepa">Banepa</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="temporaryAddress" className="col-md-4">
              Temporary Address:
            </label>
            <input
              value={details.temporaryAddress.address}
              type="text"
              className="col-md-8 text "
              onChange={(e) =>
                setDetails({
                  ...details,
                  temporaryAddress: { address: e.target.value },
                })
              }
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="temporaryWard" className="col-md-4">
              Ward:
            </label>
            <input
              value={details.temporaryAddress.ward}
              type="ward"
              className="col-md-8 text "
              onChange={(e) =>
                setDetails({
                  ...details,
                  temporaryAddress: { ward: e.target.value },
                })
              }
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="permanentMunicipality" className="col-md-4">
              Municipality:
            </label>
            <select
              value={details.temporaryAddress.municipality}
              className="col-md-8 text"
              onChange={(e) =>
                setDetails({
                  ...details,
                  temporaryAddress: { municipality: e.target.value },
                })
              }
            >
              <option value="banepa">Banepa</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="postalAddress" className="col-md-2">
              Postal Address:
            </label>
            <input
              value={details.postalAddress}
              type="text"
              className="col-md-10 text "
              onChange={(e) =>
                setDetails({ ...details, postalAddress: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="nepaliPostalAddress" className="col-md-2">
              नेपालीमा ठेगान:
            </label>
            <input
              value={details.nepaliAddress}
              type="text"
              className="col-md-10 text "
              onChange={(e) =>
                setDetails({ ...details, nepaliAddress: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="residenceTelNo" className="control-label">
              Resident Tel No.:
            </label>
            <input
              value={details.residenceTelNo}
              type="text"
              className="form-control"
              onChange={(e) =>
                setDetails({ ...details, residenceTelNo: e.target.value })
              }
            />
          </div>
          <div className="col-md-3">
            <label
              htmlFor="officeTelNo"
              className="control-label"
              onChange={(e) => setDetails({ ...details, date: e.target.value })}
            >
              Office Tel No.:
            </label>
            <input
              value={details.OfficeTelNo}
              type="text"
              className="form-control"
              onChange={(e) =>
                setDetails({ ...details, OfficeTelNo: e.target.value })
              }
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="mobileTelNo" className="control-label">
              Mobile Tel No.:
            </label>
            <input
              value={details.mobileNo}
              type="text"
              className="form-control"
              onChange={(e) =>
                setDetails({ ...details, mobileNo: e.target.value })
              }
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="emailAddress" className="control-label">
              Email address:
            </label>
            <input
              value={details.email}
              type="text"
              className="form-control"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="referenceFrom">Reference From: </label>
            <select
              value={details.referenceFrom}
              className="form-control"
              onChange={(e) =>
                setDetails({ ...details, referenceFrom: e.target.value })
              }
            >
              <option value=""></option>
              <option></option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="responsibleStaff">Responsible Staff:</label>
            <input
              value={details.responsibleStaff}
              type="text"
              className="form-control"
              onChange={(e) => setDetails({ ...details, date: e.target.value })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="accountOwnershipType">
              Account Ownership Type:
            </label>
            <input
              value={details.accountOwnershipType}
              type="text"
              className="form-control"
              onChange={(e) =>
                setDetails(
                  { ...details },
                  { accountOwnershipType: e.target.value }
                )
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="panNo">PAN No.</label>
            <input
              value={details.panNumber}
              type="text"
              className="form-control"
              onChange={(e) =>
                setDetails({ ...details, panNumber: e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="panDate">PAN Date (BS): </label>
            <input
              value={details.panDate}
              type="text"
              className="form-control"
              onChange={(e) =>
                setDetails({ ...details, panDate: e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="panDistrict">PAN District: </label>
            <input
              value={details.panDistrict}
              type="text"
              className="form-control"
              onChange={(e) =>
                setDetails({ ...details, panDistrict: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="annualTurnover">Annual Turnover:</label>
            <input
              value={details.annualTurnover}
              type="text"
              className="form-control"
              onChange={(e) =>
                setDetails({ ...details, annualTurnover: e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="noOfTransaction">No. of Transaction </label>
            <input
              value={details.numOfTransaction}
              type="text"
              className="form-control"
              onChange={(e) =>
                setDetails({ ...details, numOfTransaction: e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="riskCatagory">Risk Catagorey: </label>
            <input
              value={details.riskCategory}
              type="text"
              className="form-control"
              onChange={(e) =>
                setDetails({ ...details, riskCategory: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md"></div>
          <div className="col-md-4 d-flex">
            <label htmlFor="moblieNoForMobileBanking" className="col-md-3">
              Mobile No.
            </label>
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                value={details.mobileBanking.number}
                onChange={(e) =>
                  setDetails({
                    ...details,
                    mobileBanking: { number: e.target.value },
                  })
                }
              />
            </div>

            <div className="col-md-5">
              for{" "}
              <input
                type="checkbox"
                value={details.mobileBanking.check}
                onChange={(e) =>
                  setDetails({
                    ...details,
                    mobileBanking: { check: e.target.value },
                  })
                }
              />{" "}
              SMS Banking
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <button type="submit" className="btn btn-outline-primary">
              Forward For Approval
            </button>
          </div>
          <div className="col-md-2">
            <button
              onClick={handleCancel}
              className="btn btn-outline-secondary"
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NameAddress;
