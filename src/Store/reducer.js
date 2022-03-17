const initialState = {
  customers: [
    {
      id: "CS101",
      name: "customer1",
      transcationHistory: [
        {
          transcationNo: "CS101TS01",
          transcationDate: "10/01/2022",
          transcationAmount: 150
        },
        {
          transcationNo: "CS101TS02",
          transcationDate: "11/01/2022",
          transcationAmount: 190
        },
        {
          transcationNo: "CS101TS03",
          transcationDate: "12/01/2022",
          transcationAmount: 180
        },
        {
          transcationNo: "CS101TS04",
          transcationDate: "10/02/2022",
          transcationAmount: 200
        },
        {
          transcationNo: "CS101TS05",
          transcationDate: "04/03/2022",
          transcationAmount: 220
        }
      ]
    },
    {
      id: "CS102",
      name: "customer2",
      transcationHistory: [
        {
          transcationNo: "CS102TS01",
          transcationDate: "12/01/2022",
          transcationAmount: 130
        },
        {
          transcationNo: "CS102TS02",
          transcationDate: "13/01/2022",
          transcationAmount: 40
        },
        {
          transcationNo: "CS102TS03",
          transcationDate: "09/02/2022",
          transcationAmount: 150
        },
        {
          transcationNo: "CS102TS04",
          transcationDate: "03/03/2022",
          transcationAmount: 190
        }
      ]
    }
  ]
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "DELETE":
      return state;
    default:
      return state;
  }
}
