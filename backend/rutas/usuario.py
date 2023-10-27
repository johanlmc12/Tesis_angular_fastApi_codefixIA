from fastapi import APIRouter, HTTPException
from typing import List
from sqlalchemy import select, insert, update, delete
from databases import Database  # Asegúrate de importar tu base de datos correctamente
from models import usuario

DATABASE_URL = "postgresql://posgrest:Francisco317@localhost:5432/codefixIA"

database = Database(DATABASE_URL)

router = APIRouter()


@router.post("/usuarios/", response_model=dict)
async def create_usuario(email: str, contraseña: str):
    query = usuario.insert().values(email=email, contraseña=contraseña)
    last_record_id = await database.execute(query)
    return {"id": last_record_id, "email": email, "contraseña": contraseña}

