import React, { useState } from "react";

import { Container, InfoItem, EditButton, DeleteButton } from "./styles";
import EditarItem from "../EditaItem";

interface Props {
    id: string
    name: string;
    valor: number;
    descricao: string;
}

const Item: React.FC<Props> = ({ id, name, valor, descricao }) => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <Container>
            <InfoItem>
                <p>{id}</p>
                <p>{name}</p>
                <p>R$ {valor}</p>
                <p>{descricao}</p>
                <div>
                    <button>
                        <EditButton id={name} onClick={() => setOpenModal(true)}
                        />
                    </button>
                    <button>
                        <DeleteButton />
                    </button>
                </div>
            </InfoItem>
            <EditarItem isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}
                name={name} valor={valor} descricao={descricao}>
                Conteúdo do modal
            </EditarItem>
        </Container>
    );
};

export default Item;
