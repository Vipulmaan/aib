import React from 'react';
import 'tachyons';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
 
export default function Articles() {
    return (
        <div className='bg-white article_content background_cover vendors pa2'>
            <h1 className="tc list_of_members_header fw6">
                    Articles
                </h1>
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       THE GAZETTE OF INDIA
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1HxbJ7RuS5iNcdRBgvTdnG7Xnn_vw5RfG" target="_blank">
                            <p className="black">Open file</p>
                        </a>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       THE GAZETTE OF INDIA 1996
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=17t7w2HbYqP2H2hJgj-UgpYGtJFojNmF3" target="_blank">
                            <p className="black">Open file</p>
                        </a>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       THE GAZETTE OF INDIA 1999
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1ox58Sid8FKMWLNSiILRXc0rlpxxa5PZ1" target="_blank">
                            <p className="black">Open file</p>
                        </a>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       RAJASTHAN MINOR MINERAL GAZETTE
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1CE94sjMgXY9bhu_ICJNS4KB80TL3mLJW" target="_blank">
                            <p className="black">Open file</p>
                        </a>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
    );
}

