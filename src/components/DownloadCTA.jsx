import React from 'react'
import './DownloadCTA.css'

export default function DownloadCTA({
  className = '',
  variant = 'default', // 'default' | 'compact' | 'header'
  disabled = false,
  text = 'Download Report PDF',
  showIcon = false,
  style = {}
}) {
  const pdfUrl = '/Lohia%20corp%20-%20Annual%20Report%20-%202024-25.pdf'
  const fileName = 'Lohia corp - Annual Report - 2024-25.pdf'

  if (disabled) {
    return (
      <button
        type="button"
        className={`primary-cta is-disabled ${className}`}
        disabled
        aria-disabled="true"
        style={style}
      >
        {showIcon && (
          <svg
            className="primary-cta__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        )}
        <span>{text}</span>
      </button>
    )
  }

  return (
    <a
      href={pdfUrl}
      download={fileName}
      target="_blank"
      rel="noopener noreferrer"
      className={`primary-cta primary-cta--${variant} ${className}`}
      style={style}
      id={`cta-download-${variant}`}
      aria-label="Download Lohia Corp Annual Report 2024-25 PDF"
    >
      {showIcon && (
        <svg
          className="primary-cta__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      )}
      <span>{text}</span>
    </a>
  )
}
