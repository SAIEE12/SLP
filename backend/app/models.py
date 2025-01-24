from sqlalchemy import Column, Integer, String, Float
from app.database import Base

class Order(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True)
    order_no = Column(String, unique=True, index=True)
    name = Column(String, index=True)
    items_ordered = Column(String)
    quantity = Column(String)
    items_amount = Column(String)
    delivery_charges = Column(Float)
    total = Column(Float)
    payment_status = Column(String)
    delivery_status = Column(String)
