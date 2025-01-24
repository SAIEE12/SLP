from pydantic import BaseModel

class OrderBase(BaseModel):
    order_no: str
    name: str
    items_ordered: str
    quantity: str
    items_amount: str
    delivery_charges: float
    total: float
    payment_status: str
    delivery_status: str

class OrderCreate(OrderBase):
    pass

class Order(OrderBase):
    id: int

    class Config:
        orm_mode = True
