'use client'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { 
    ClassicEditor, 
    Bold, 
    Essentials, 
    Italic, 
    Paragraph, 
    Undo, 
    Heading, 
    List, 
    Table, 
    TableToolbar, 
    Mention,
    CloudServices
} from 'ckeditor5';
import { 
    Template, 
    SlashCommand, 
    MultiLevelList,
    AIAssistant,
    OpenAITextAdapter,
    ExportPdf
} from 'ckeditor5-premium-features';
import { WProofreader } from '@webspellchecker/wproofreader-ckeditor5';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

function CustomEditor() {
    return (
        <CKEditor
            editor={ ClassicEditor }
            config={ {
                toolbar: {
                    items: [ 
                        'undo', 'redo', 
                        '|', 
                        'bold', 'italic', 
                        '|', 
                        'heading', 
                        '|', 
                        'bulletedList', 'numberedList', 'multiLevelList', 
                        '|', 
                        'insertTable', 
                        '|', 
                        'insertTemplate',
                        '|',
                        'wproofreader',
                        '|',
                        'aiCommands', 'aiAssistant',
                        '|',
                        'exportPdf'
                    ],
                },
                plugins: [
                    Bold, 
                    Essentials, 
                    Italic, 
                    Paragraph, 
                    Undo, 
                    Heading, 
                    List, 
                    Table, 
                    TableToolbar, 
                    Template, 
                    Mention, 
                    SlashCommand, 
                    MultiLevelList,
                    WProofreader,
                    AIAssistant,
                    OpenAITextAdapter,
                    CloudServices,
                    ExportPdf
                ],
                licenseKey: '',
                table: {
                    defaultHeadings: { rows: 1 }
                },
                template: {
                    definitions: [
                        {
                            title: 'Invoice Template',
                            description: 'A template for my invoices',
                            data: `<h1>Invoice</h1>
                                    <ol>
                                        <li>Videos</li>
                                        <li>Articles</li>
                                        <li>Code demos</li>
                                    </ol>
                                    <figure class="table">
                                        <table>
                                        <thead>
                                            <tr>
                                                <th>Services</th>
                                                <th>Duration</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Developer Advocacy</td>
                                                <td>January</td>
                                                <td>$1000</td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    <figcaption>Pricing table</figcaption>
                                    </figure>`
                        }
                    ]
                }, 
                slashCommand: {
                    removeCommands: ['heading', 'paragraph', 'bulletedList', 'numberedList', 'insertTable' ]
                },
                wproofreader: {
                    serviceId: '',
                    srcUrl: 'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js'
                },
                ai: {
                    openAI: {
                        requestHeaders: {
                            Authorization: ''
                        }
                    }
                },
                exportPdf: {
                    tokenUrl: ''
                }
            } }
        />
    );
}

export default CustomEditor;
