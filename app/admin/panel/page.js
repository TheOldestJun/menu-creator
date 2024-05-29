"use client";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import ProductPanel from "@/app/components/admin/ProductPanel";

export default function Page() {
  const tabsData = [
    {
      label: "Создать блюдо",
      value: "create-recipe",
    },
    {
      label: "Создать продукт",
      value: "create-product",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <Card className="w-[98vw]">
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="text-center mb-3"
          >
            Панель администратора
          </Typography>
          <Tabs value={tabsData[0].value}>
            <TabsHeader>
              {tabsData.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              <TabPanel value="create-recipe">Create recipe</TabPanel>
              <TabPanel value="create-product">
                <ProductPanel />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
