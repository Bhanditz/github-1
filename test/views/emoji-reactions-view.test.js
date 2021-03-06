import React from 'react';
import {shallow} from 'enzyme';
import EmojiReactionsView from '../../lib/views/emoji-reactions-view';

describe('EmojiReactionsView', function() {
  let wrapper;
  const reactionGroups = [
    {content: 'THUMBS_UP', users: {totalCount: 10}},
    {content: 'THUMBS_DOWN', users: {totalCount: 5}},
    {content: 'LAUGH', users: {totalCount: 0}}];
  beforeEach(function() {
    wrapper = shallow(<EmojiReactionsView reactionGroups={reactionGroups} />);
  });
  it('renders reaction groups', function() {
    const groups = wrapper.find('.github-IssueishDetailView-reactionsGroup');
    assert.lengthOf(groups.findWhere(n => /👍/u.test(n.text()) && /\b10\b/.test(n.text())), 1);
    assert.lengthOf(groups.findWhere(n => /👎/u.test(n.text()) && /\b5\b/.test(n.text())), 1);
    assert.isFalse(groups.someWhere(n => /😆/u.test(n.text())));
  });
});
