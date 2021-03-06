import React, {Component, ReactNode} from 'react';
import Focusable from "../Focusable/Focusable";
import {NotebookContext, NotebookContextValue} from "../Notebook/NotebookContext";
import clsx from "clsx";


/**
 * Types
 * @author Ingo Andelhofs
 */
type LineTypes = "lines" | "grid";
type DefaultData = {
  subType: LineTypes;
  amountOfLines: number;
};


/**
 * Props Interface
 * @author Ingo Andelhofs
 */
interface Props extends React.HTMLAttributes<HTMLElement> {
  defaultData: DefaultData;

  // Notebook
  selected: boolean;
  position: number;

  // NotebookLine
  onLineTypeChange: (type: string) => void;
  onPaste: (pasteData: any) => void;
}


/**
 * State Interface
 * @author Ingo Andelhofs
 */
interface State {
  subType: LineTypes;
  amountOfLines: number | string;
}



/**
 * LinesLine Component
 * @author Ingo Andelhofs
 */
class LinesLine extends Component<Props, State> {

  // Refs
  private ref = React.createRef<HTMLDivElement>();

  // Context
  public static contextType = NotebookContext;
  public context: NotebookContextValue;

  // State
  public state: State = {
    subType: "lines",
    amountOfLines: 3,
  }

  // Props
  public static defaultProps: Partial<Props> = {
    defaultData: {
      subType: "lines",
      amountOfLines: 3,
    },
  }


  // Event handlers
  /**
   * Handles the click event
   */
  private onClick = (): void => {
    this.onSelect();
  }

  /**
   * Handles the selection of this element
   */
  private onSelect = (): void => {
    this.context.selectLine(this.props.position);
  }

  /**
   * Handles the KeyDown event
   * @param event The KeyboardEvent
   */
  private onKeyDown = (event: React.KeyboardEvent): void => {
    this.context.defaultKeyDown(event);
  }

  /**
   * Handles the change of amount of lines of this element
   * @param event The FormEvent of the input element
   */
  private onChangeAmountOfLines = (event: React.FormEvent): void => {
    let value = (event.target as HTMLInputElement).value;
    let parsedValue = Number.parseInt(value);

    this.setState(() => ({
      amountOfLines: Number.isNaN(parsedValue) ? "" : parsedValue,
    }))
  }

  /**
   * Handles the change of type form lines to grid or grid to lines
   */
  private onToggleSubType = (): void => {
    this.setState((prevState) => ({
      subType: prevState.subType === "lines" ? "grid" : "lines",
    }))
  }


  // Lifecycle methods
  /**
   * Called if the component mounts
   */
  public componentDidMount(): void {

    // Handle default data
    // ==================================================
    let {defaultData} = this.props;
    let subType = defaultData?.subType || this.state.subType;
    let amountOfLines = defaultData?.amountOfLines || this.state.amountOfLines;

    this.setState(() => ({ subType, amountOfLines }));
    // ==================================================
  }


  // Render methods
  /**
   * Render as grid
   */
  public renderGrid(): ReactNode {
    let rows = [];
    let cols = [];

    for (let i = 0; i < 30; ++i) {
      cols.push(<td key={i}/>);
    }

    for (let i = 0; i < this.state.amountOfLines; ++i) {
      rows.push(<tr key={i}>{cols}</tr>);
    }

    return <table className={"grid"}>
      <tbody>
      {rows}
      </tbody>
    </table>;
  }

  /**
   * Render as lines
   */
  public renderLines(): ReactNode {
    let rows = [];

    for (let i = 0; i < this.state.amountOfLines; ++i) {
      rows.push(<tr key={i}><td/></tr>);
    }

    return <table className={"lines"}>
      <tbody>
        {rows}
      </tbody>
    </table>;
  }

  /**
   * Render the container
   */
  private renderContainer(): ReactNode {
    return <div>
      <div className="action-buttons">
        <button
          onClick={this.onToggleSubType}
          children={this.state.subType === "lines" ? "Change to grid" : "Change to lines"}
        />
        &nbsp;
        &nbsp;

        <label>
          Amount of lines: <input
            type="number"
            value={this.state.amountOfLines.toString()}
            onChange={this.onChangeAmountOfLines}
          />
        </label>

      </div>
      <div
        className="grid-wrapper"
        children={this.state.subType === "lines" ? this.renderLines() : this.renderGrid()}
      />
    </div>
  }

  /**
   * Render the component
   */
  public render(): ReactNode {
    const classNames = clsx({
      "lines-line": true,
      "--selected": this.props.selected,
      "--not-selected": !this.props.selected
    });

    return <Focusable
      innerRef={this.ref}
      className={classNames}
      children={this.renderContainer()}

      focus={this.props.selected}
      onClick={this.onClick}
      onKeyDown={this.onKeyDown}
    />;
  }
}


export default LinesLine;