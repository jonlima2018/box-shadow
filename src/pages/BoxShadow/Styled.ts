import styled from 'styled-components';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  margin-top: 40px;
  

  .control{
    display: flex;
    flex-direction: column;
    text-align: center;

    .control__title{
        color:#3F51B5;
        margin-bottom: 20px;
        font-weight: bold;
        text-transform: uppercase;
    }

    .control__options{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        min-width: 270px;
        width: 330px;
        margin: 0 auto;

        input {
            width: 80px;
        }
    }

    .control__options__btn{
        cursor: pointer;
        outline: none;
        align-self:flex-end;
        margin-top: 20px;
        height:30px;
        width: 100px;
        border-radius: 4px;
        border: 2px solid #3f51b5;
        padding: 0.3em 1.5em;
        background-color: #3f51b5;
        color: #fff;
        text-align: center;
        transition: all 0.2s;


        &:hover{
            background-color: #fff;
            color: #3f51b5;
            font-weight: bold;
            box-shadow: 0 0 0 5px #3f51b520;
        }
    }
  }

  .box{
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    max-height: 600px;
    
    .box__color{
        height: 400px;
        width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;

        .box__code{
            background-color: #fff;
            display: block;
            position: relative;
            width: 380px;
            height: 100px;
            list-style: none;
            margin: 0 auto;
            border: 1px solid black;
            border-radius: 4px;

            .box__items{
                padding: 5px;
                font-size: 0.9em;
            }
        }
    }
  }

  @media(max-width: 900px){
      display:flex;
      flex-direction:column;
      align-items: center;

    .control__options{
        min-width: 200px;
        width: 250px;
    }

  .box{
      width:350px;
      height:350px;
      margin-top:20px;
      margin-bottom:20px;
    
    .box__color{
        height: 250px;
        width: 250px;
        .box__code{
            width: 250px;
            height: 150px;
        }
    }
  }

  }

`;

export default StyledContainer;
