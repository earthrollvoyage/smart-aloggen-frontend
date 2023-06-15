import React from "react";
import styled from "styled-components";
import ServiceCard from "../../components/serviceCard";
import firstService from "../../images/thumbnails/1.jpeg";
import secondService from "../../images/thumbnails/2.jpeg";
import thirdService from "../../images/thumbnails/3.jpeg";
import fourthService from "../../images/thumbnails/4.jpeg";
// import Button from "../../components/button"

const ServicesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ServicesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.h1`
    font-weight: 900;
    color: rgb(73,140,200);
`;

// const ButtonContainer = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center ;
// `;

// const ViewMoreButton = styled(Button)`
//     background-color: #F2F2F2;
//     box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
//     color: #959595;
//     font-size: 14px;

//     &:hover {
//         background-color: #F2F2F2;
//         filter: contrast(0.8);
//     }
// `;

const imageList = [
    {
        id: 1,
        title: 'Logs Data Analytics',
        rat: 2,
        rating: 2,
        thumbnail: firstService,
        specialist: { "id": 1, "fullName": "Earth"}
    },
    {
        id: 2,
        title: 'Logs Reporter',
        rat: 2,
        rating: 2,
        thumbnail: secondService,
        specialist: { "id": 1, "fullName": "Earth"}
    },
    {
        id: 3,
        title: 'Smarter Create Logs',
        rat: 2,
        rating: 2,
        thumbnail: thirdService,
        specialist: { "id": 1, "fullName": "Earth"}
    },
    {
        id: 4,
        title: 'Logs Management',
        rat: 2,
        rating: 2,
        thumbnail: fourthService,
        specialist: { "id": 1, "fullName": "Earth"}
    }
]

const Services = () => {
    return (
        <ServicesContainer name='serviceCard'>
            <Title>Explore Our Features</Title>
            <ServicesWrapper>
                {
                    imageList.map(serviceItem => (
                        <ServiceCard key={ serviceItem.id } { ...serviceItem } />
                    ))
                }
            </ServicesWrapper>
            {/* <Marginer direction="vertical" margin="2em"  /> */}
            {/* <ButtonContainer>
                <ViewMoreButton>View More</ViewMoreButton>
            </ButtonContainer> */}
        </ServicesContainer>
    )
}

export default Services;