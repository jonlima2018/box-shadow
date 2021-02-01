import styled from 'styled-components';

const StyledPicker = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .picker__title{
        font-weight: bold;
    }

    .picker__container{
    
        .picker__swatch{
            display: inline-block;
            padding: 0;
            background: '#fff';
            border-radius: 1px;
            box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
            margin-left: 10px;        
            cursor: pointer;

            .picker__swatch--color{
                width: 30px;
                height: 20px;
                border-radius: 2px;
            }
        }

        .picker__input{
            margin-left: 20px;
        }
    }

    .picker_popover{
        position: absolute;
        z-index: 2;

        .picker_cover{
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    }

`;

export default StyledPicker;