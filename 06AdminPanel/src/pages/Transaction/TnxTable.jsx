import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";

export default function TnxTable() {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {HEADINGS.map((val, id) => (
              <Th
                fontSize={12}
                fontWeight={"medium"}
                color={"grayText2"}
                key={id}
              >
                {val}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {TNXS.map(({ id, date, type, amt, status }, index) => {
            return (
              <Tr key={index}>
                <Td style={TDStyle}>{id}</Td>
                <Td style={TDStyle}>
                  <Stack spacing={0}>
                    <Text>{date.date}</Text>
                    <Text style={TDLightStyle}>{date.time}</Text>
                  </Stack>
                </Td>

                <Td style={TDStyle}>
                  <Stack spacing={0}>
                    <Text>{type.t1}</Text>
                    <Text style={TDLightStyle}>{type.t2}</Text>
                  </Stack>
                </Td>
                <Td style={TDStyle}>{amt}</Td>
                <Td>
                  <Box
                    bg={STATUS_COLOR[status]}
                    color={"white"}
                    display={"flex"}
                    borderRadius={12}
                    justifyContent={"flex-start"}
                    py={0.5}
                    px={3}
                    maxW={"fit-content"}
                  >
                    {status}
                  </Box>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

const TDStyle = {
  fontWeight: "500",
  fontSize: 13,
  color: "#171717",
};
const TDLightStyle = {
  fontWeight: "400",
  fontSize: 11,
  color: "#535D66",
};

const HEADINGS = ["ID", "Date & Time", "Type", "Amount", "Status"];
const TNXS = [
  {
    id: "HD82NA2H",
    date: { date: "2022-06-09", time: "07:06 PM" },
    type: { t1: "INR Deposit", t2: "E-Transfer" },
    amt: "+ ₹81,123.10",
    status: "Pending",
  },
  {
    id: "JK23LS8D",
    date: { date: "2022-07-10", time: "02:15 PM" },
    type: { t1: "INR Withdrawal", t2: "ATM" },
    amt: "- ₹5,000.00",
    status: "Processing",
  },
  {
    id: "LM54QS9T",
    date: { date: "2022-07-11", time: "10:45 AM" },
    type: { t1: "INR Deposit", t2: "Bank Transfer" },
    amt: "+ ₹25,000.00",
    status: "Cancelled",
  },
  {
    id: "PO45RT8Y",
    date: { date: "2022-07-12", time: "04:30 PM" },
    type: { t1: "INR Deposit", t2: "E-Transfer" },
    amt: "+ ₹18,450.50",
    status: "Completed",
  },
  {
    id: "QW56YU9I",
    date: { date: "2022-07-13", time: "01:20 PM" },
    type: { t1: "INR Withdrawal", t2: "ATM" },
    amt: "- ₹2,500.00",
    status: "Processing",
  },
  {
    id: "ER67TI7U",
    date: { date: "2022-07-14", time: "09:00 AM" },
    type: { t1: "INR Deposit", t2: "Bank Transfer" },
    amt: "+ ₹50,000.00",
    status: "Completed",
  },
  {
    id: "TY78OP6E",
    date: { date: "2022-07-15", time: "11:45 AM" },
    type: { t1: "INR Deposit", t2: "E-Transfer" },
    amt: "+ ₹30,000.00",
    status: "Pending",
  },
  {
    id: "UI89WO5R",
    date: { date: "2022-07-16", time: "03:20 PM" },
    type: { t1: "INR Withdrawal", t2: "ATM" },
    amt: "- ₹1,000.00",
    status: "Completed",
  },
  {
    id: "OP90ZX4V",
    date: { date: "2022-07-17", time: "06:55 PM" },
    type: { t1: "INR Deposit", t2: "Bank Transfer" },
    amt: "+ ₹10,000.00",
    status: "Pending",
  },
  {
    id: "BN21XS3M",
    date: { date: "2022-07-18", time: "08:40 AM" },
    type: { t1: "INR Withdrawal", t2: "ATM" },
    amt: "- ₹3,000.00",
    status: "Cancelled",
  },
  {
    id: "CV32ZW2N",
    date: { date: "2022-07-19", time: "12:30 PM" },
    type: { t1: "INR Deposit", t2: "E-Transfer" },
    amt: "+ ₹15,000.00",
    status: "Pending",
  },
];

const STATUS_COLOR = {
  Pending: "grayText2",
  Processing: "brand.yellow",
  Cancelled: "brand.red",
  Completed: "brand.green",
};
