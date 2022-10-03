import { css } from "lit";

export default css`
    .table thead th {
        vertical-align: bottom;
        border-bottom: 2px solid #dee2e6;
    }
    .table td, .table th {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
    }
    th {
        text-align: inherit;
        text-align: -webkit-match-parent;
    }
`;