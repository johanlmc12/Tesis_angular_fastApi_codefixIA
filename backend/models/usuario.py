from sqlalchemy import Table, Column, Integer, String, MetaData

metadata = MetaData()

usuarios = Table(
    "usuarios",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("email", String),
    Column("contraseña", String),
)
