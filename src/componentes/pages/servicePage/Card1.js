import React from 'react'
import {Card, CardBody, CardTitle, CardHeader, CardText, Button, CardSubtitle, CardFooter} from 'reactstrap'
// rfc
function Card1() {
    return (
        <section id='cardsection'>
            <div className='sectionteste'>
                <Card className="my-2 text-center" id='Card1'>
                    <CardHeader id='card1Header'>
                    <CardTitle tag="h5">
                        ELOJOB
                    </CardTitle>
                    </CardHeader>
                    <CardBody id='body'>
                        <CardText className='CardText'>
                            Nesta modalidade nós jogaremos na sua conta até atingir a o elo solicitado
                        </CardText>
                    </CardBody>
                    <CardFooter id='card1Footer'>
                        <Button id='buttonCard1'>
                            VER MAIS
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div className='sectionteste'>
            <Card className="my-2 text-center" id='Card1'>
                <CardHeader id='card1Header'>
                <CardTitle tag="h5">
                    DUOBOOST
                </CardTitle>
                </CardHeader>
                <CardBody id='body'>
                    <CardText className='CardText'>
                        Nesta modalidade você jogará com um player de alto nível para chegar ao elo solicitado.
                    </CardText>
                </CardBody>
                <CardFooter id='card1Footer'>
                    <Button id='buttonCard1'>
                        VER MAIS
                    </Button>
                </CardFooter>
            </Card>
            </div>
            <div className='sectionteste'>
            <Card className="my-2 text-center" id='Card1'>
                <CardHeader id='card1Header'>
                <CardTitle tag="h5">
                    COACH
                </CardTitle>
                </CardHeader>
                <CardBody id='body'>
                    <CardText>
                        <p className='CardText'>Nesta modalidade você receberá coach com um player de alto nível para chegar ao elo solicitado.</p>
                    </CardText>
                </CardBody>
                <CardFooter id='card1Footer'>
                    <Button id='buttonCard1'>
                        VER MAIS
                    </Button>
                </CardFooter>
            </Card>
            </div>
        </section>
    )
              
}

export default Card1
